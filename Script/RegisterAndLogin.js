function RemoveData(item){
    if(item == 1){
        document.getElementById("phone").value = "";
    }
    if(item == 2){
        document.getElementById("FirstName").value = "";
    }
    if(item == 3){
        document.getElementById("Password").value = "";
    }
    if(item == 4){
        document.getElementById("email").value = "";
    }
}

let phoneList = [];
let passwordList = [];
let nameList = [];
function AddDataRegister(){
    let phone = document.getElementById("phone").value;
    let FirstName = document.getElementById("FirstName").value;
    let Password = document.getElementById("Password").value;
    let Email = document.getElementById("email").value;
    let check = document.getElementById("checkRule");
    if(phone == "" || FirstName == "" || Password == "" || Email == "" || check.checked == false){
        alert("اطلاعات کامل نیست!!");
    }
    else{
        let checkData = phoneList.includes(phone);
        if(checkData != true){
            phoneList.push(phone);
            passwordList.push(Password);
            nameList.push(FirstName);
            localStorage.setItem("UserNames",JSON.stringify(phoneList));
            localStorage.setItem("Passwords",JSON.stringify(passwordList));
            localStorage.setItem("Name",JSON.stringify(nameList));
            alert("حساب کاربری با موفقیت انجام شد :)");
            document.getElementById("phone").value = "";
            document.getElementById("FirstName").value = "";
            document.getElementById("Password").value = "";
            document.getElementById("email").value = "";
            document.getElementById("checkRule").check = false;
        }
        else{
            alert("این نام کاربری وجود دارد!!");
        }
    }
}

// let recentPhoneList = [];
// let recentPasswordList = [];
// recentPhoneList.push(JSON.parse(localStorage.getItem("UserNames")));
// recentPasswordList.push(JSON.parse(localStorage.getItem("Passwords")));

// window.onload = () => {
//     phoneList.push(recentPhoneList);
//     passwordList.push(recentPasswordList); 
// };

let nameLoad = "";
let result = false;

function LoadData(){
    let username = document.getElementById("UserName").value;
    let password = document.getElementById("Password").value;
    let checkResult = document.getElementById("checkData");
    let GetUserName = JSON.parse(localStorage.getItem("UserNames"));
    let GetPassword = JSON.parse(localStorage.getItem("Passwords"));
    let GetName = JSON.parse(localStorage.getItem("Name"));
    for (let index = 0; index < GetUserName.length; index++) {
        const user = GetUserName[index];
        const pass = GetPassword[index];
        const name = GetName[index];
        nameLoad = name;
        if(username ==  user && pass == password){
            document.getElementById("UserName").value = "";
            document.getElementById("Password").value = "";
            if(checkResult.checked == true){
                localStorage.setItem("userData",username);
                localStorage.setItem("passData",password);
                location.reload();
            }
            result = true;
            break;
        }
    }
    if(result == false){
        alert("نام کاربری یا رمز عبور نادرست است!!");
    }
    else{
        alert(nameLoad + " خوش آمدی ");
    }
}

let counter = 0;
function changeBox(){
    if(counter == 0){
        document.getElementById("emailEvent").style.display = "flex";
        document.getElementById("phoneEvent").style.display = "none";
        counter = 1;
    }
    else{
        document.getElementById("phoneEvent").style.display = "flex";
        document.getElementById("emailEvent").style.display = "none";
        counter = 0;
    }
}

let resultData = false;
function sendData(){
    if(counter == 1){
        let email = document.getElementById("email").value;
        let emailarray = JSON.parse(localStorage.getItem("emails"));
        for (let index = 0; index < emailarray.length; index++) {
            const element = emailarray[index];
            if(element == email){
                resultData = true;
            }
        }
        if(resultData == true){
            alert("لینک مورد نظر ارسال شد");
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
        }
        else{
            alert("این ایمیل ثبت نشده !!");
        }
    }
    else{
        let phone = document.getElementById("phone").value;
        let phonearray = JSON.parse(localStorage.getItem("UserNames"));
        for (let index = 0; index < phonearray.length; index++) {
            const element = phonearray[index];
            
            if(element == phone){
                resultData = true;
            }
        }
        if(resultData == true){
            alert("لینک مورد نظر ارسال شد");
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
        }
        else{
            alert("این شماره ثبت نشده !!");
        }
    }
}