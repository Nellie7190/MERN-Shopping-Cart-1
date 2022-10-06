const mongoose = require('mongoose');
// Schema shortcut
const Schema = mongoose.Schema;

const itemSchema = require('./itemSchema')


const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  item: itemSchema,
  // item: { type: Schema.Types.ObjectId, ref: 'ItemSchema', required: true },
}, {
  timestamps: true,
  // If you want virtual field to be displayed on client-side, set virtuals: true for toJSON in schema options below.
  // Mongoose will now invoke all these virtual properties and include their values when the document is either printed or sent.
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the lineItem subdocument
  return this.qty * this.item.price;
})

const orderSchema = new Schema({
  // An order belongs to a user
  // The type variable is holding a foreign ID of a given document
  // In this case, it will be the user's document.id
  // The ref option is what tells Mongoose which model to use during population, in our case the User model. All _ids we store here must be document _ids from the User model.
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // lineItems is going to be an array of lineItemSchema
  // Haven't written lineItemSchema yet.
  // This is how we do embedding.
  lineItems: [lineItemSchema],
  // A user's unpaid order is their "cart"
  isPaid: { type: Boolean, default: false },
}, {
  // Timestamp for an order
  timestamps: true,
  toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
})

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
})

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
})

// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function (userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    const item = await mongoose.model('Item').findById(itemId);
    cart.lineItems.push({ item });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (itemId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);