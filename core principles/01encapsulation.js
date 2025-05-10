// Security, Maintainibility, modularity, and code reusability
import mongoose from 'mongoose';
import bcryppt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        _password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.methods.getPassword = async () => {
    return this._password;
};

userSchema.methods.setPassword = async (plainpassword) => {
    if (plainpassword.length < 8) throw new Error('Password too short.');
    this._password = await bcrypt.hash(plainpassword, 12);
};

const User = mongoose.model('User', userSchema);
export default User;
