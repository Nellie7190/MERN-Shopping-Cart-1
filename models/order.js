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
  toJSON: { virtuals: true },
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
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema);