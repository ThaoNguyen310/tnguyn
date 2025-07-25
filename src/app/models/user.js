import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;



