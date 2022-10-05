# MERN-Shopping-Cart-Part-1

## ⚠️⚠️⚠️ DO NOT FORK ⚠️⚠️⚠️

```
cd Desktop
cd seir-7-25/unit-04
git clone git@git.generalassemb.ly:SEIR-7-25/MERN-Shopping-Cart-Part-1.git 
cd MERN-Shopping-Cart-Part-1
npm i
npm run build
touch .env
code .
```

Add all the seeting to the `.env` file

### Having trouble keeping up? If so, please use the following commands

```
git fetch --all
git checkout main
git reset --hard origin/main
```

The above commands will only function if you are in the `MERN-Shopping-Cart-Part-1` directory.


[Mongoose Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html#:~:text=In%20Mongoose%2C%20a%20virtual%20is,for%20computed%20properties%20on%20documents.)
- In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
- Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. 

[Serialization Tutorial](https://hazelcast.com/glossary/serialization/)
Serialization is the process of mapping an object to a BSON document that can be saved in MongoDB, and deserialization is the reverse process of reconstructing an object from a BSON document. For that reason the serialization process is also often referred to as “Object Mapping.”

Serialization is the process of converting a data object—a combination of code and data represented within a region of data storage—into a series of bytes that saves the state of the object in an easily transmittable form.

Data serialization is the process of converting an object into a stream of bytes to more easily save or transmit it.

Serialization enables us to save the state of an object and recreate the object in a new location. Serialization encompasses both the storage of the object and exchange of data. 


[Javascript Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[What is Serialization?](https://hazelcast.com/glossary/serialization/)

[Hooks for Custom Statics](http://thecodebarbarian.com/mongoose-5-5-static-hooks-and-populate-match-functions.html#:~:text=Statics%20are%20Mongoose's%20implementation%20of,you%20compile%20with%20that%20schema.&text=Mongoose%205.5%20introduces%20the%20ability,pre('findByName')%20.)

Statics are Mongoose's implementation of OOP static functions. You add a static function to your schema, and Mongoose attaches it to any model you compile with that schema.

[Methods and Statics](https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html)

[What is the difference between methods and statics in Mongoose?](https://stackoverflow.com/questions/23425303/what-is-the-difference-between-methods-and-statics-in-mongoose)

Methods operate on an instance of a model. Statics behave as helper functions only and can perform any action you want, including collection level searching. They aren't tied to an instance of a Model. But methods are also defined on models and work on all the instances of that model.

[findOneAndUpdate](// https://mongoosejs.com/docs/tutorials/findoneandupdate.html)