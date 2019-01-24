function checkValidate() {
    // Lấy giá trị của các trường
    var username = document.getElementsByClassName('name')[0].value;
    var success = false;
    console.log(username);
    var email = document.getElementsByClassName('email')[0].value;
    var phone = parseInt(document.getElementsByClassName('phone')[0].value);
    var password = document.getElementsByClassName('password')[0].value;
    var confirmPassword = document.getElementsByClassName('confirm-password')[0].value;

    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (username == '') {
        document.getElementsByClassName('name')[0].nextElementSibling.classList.remove("hidden");
        success = false;
    } else {
        document.getElementsByClassName('name')[0].nextElementSibling.classList.add("hidden");
        if (username.length <=7) {
            alert("họ tên phải ít nhất 8 kí tự");
            success = false;
        } else {
            success = true;
        }
    }
    if (email == '') {
        document.getElementsByClassName('email')[0].nextElementSibling.classList.remove("hidden");
        success = false;
    } else {
        document.getElementsByClassName('email')[0].nextElementSibling.classList.add("hidden");
        success = true;
    }
    if (phone == '') {
        document.getElementsByClassName('phone')[0].nextElementSibling.classList.remove("hidden");
        success = false;
    } else {
        document.getElementsByClassName('phone')[0].nextElementSibling.classList.add("hidden");
        
        if (typeof phone !== 'number') {
            alert("số điện thoại phải là kiểu số");
            success = false;
        } else {
            success = true;
        }
    }
    if (password == '') {
        document.getElementsByClassName('password')[0].nextElementSibling.classList.remove("hidden");
        success =false;
    } else {
        document.getElementsByClassName('password')[0].nextElementSibling.classList.add("hidden");
        success =true;
    }
    if (confirmPassword == '') {
        success = false;
        document.getElementsByClassName('confirm-password')[0].nextElementSibling.classList.remove("hidden");
    } else {
        document.getElementsByClassName('confirm-password')[0].nextElementSibling.classList.add("hidden");
        if (confirmPassword !== password) {
            alert('password và confirmPassword phải giống nhau');
            success =false;
        } else {
            success = true;
        }
    }

    if (success) {
        alert('Thành công');
    }
}