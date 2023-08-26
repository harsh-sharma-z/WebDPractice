const bcrypt = require('bcrypt');


// const hashPassword = async (pw) =>{
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw , salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) =>{
    const hash = await bcrypt.hash(pw , 12);
    console.log(hash);
}

const login = async(pw , hashPw) =>{
    const res = await bcrypt.compare(pw , hashPw);
    if(res)
        console.log('Logged you in successfully');
    else
    console.log('Worng pw, try again');
}

// hashPassword('harsh');
login('harsh' , '$2b$12$foPPF.sD2HDZhzS/Tx/sc.zbCNTMdAUdtWr09X7fyfYUvdsVw0JVa')