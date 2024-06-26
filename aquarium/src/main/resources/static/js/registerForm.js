function idDupl(){

    var id = $("#memberId").val();
    var idRegExp = /^[a-z0-9A-Z]{5,50}$/;

    if(id === ""){
        $("#idDupl").text("아이디를 입력해주세요.").css("color", "red");
        return false;
    }
    else if(!idRegExp.test(id)){
        $("#idDupl").text("잘못된 아이디 방식입니다.").css("color", "red");
        return false;
    }
    else if(id === "username"){
        $("#idDupl").text("중복된 아이디입니다.").css("color", "red");
        return false;
    }
    else{
        $("#idDupl").text("사용 가능한 아이디입니다.").css("color", "green");
        return true;
    }
}

function pwSame(){
        
    var password = $("#memberPw").val();
    var passwordConfirm = $("#memberPwConfirm").val(); 

    if(password === "" || passwordConfirm === ""){
        $("#pwSame").text("비밀번호를 모두 입력해주세요.").css("color", "red");
        return false;
    }
    else if(password != passwordConfirm){
        $("#pwSame").text("비밀번호가 일치하지 않습니다.").css("color", "red");
        return false;
    }
    else{
        $("#pwSame").text("비밀번호가 일치합니다.").css("color", "green");
        return true;
    }
}

$(document).ready(function(){
    $("#memberId").on("input", function(){
 
        var idRegExp = /^[a-z0-9A-Z]{5,50}$/;
        var id = $("#memberId").val();

        if(id === ""){
            $("#validateIdMsg").text("");
            return false;
        }
        else if(!idRegExp.test(id)){
            $("#validateIdMsg")
            .text("아이디는 5자이상의 영어와 숫자의 조합으로 작성해주세요.").css("color", "red");
            return false;
        }
        else{
            $("#validateIdMsg").text("");
            return true;
        }
    });

    $("#memberPw").on("input", function(){
        var password = $(this).val();
        var pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if(password === ""){
            $("#validatePwMsg").text("");
            return false;
        }
        else if(pwRegExp.test(password)){
            $("#validatePwMsg")
            .text("");
            return true;
        }
        else{
            $("#validatePwMsg")
            .text("비밀번호는 최소 8자 이상의 특수문자, 영어, 숫자 조합이어야 합니다.")
            .css("color","red");
            return false;
        }
    })

    $("#memberName").on("input",function(){

        var name = $(this).val();
        var nameRegExp = /^[가-힣]{2,5}$/;


        if(name === ""){
            $("#validateNameMsg").text("");
        }
        else if(!nameRegExp.test(name)){
            $("#validateNameMsg").text("부적절한 이름입니다.")
            .css("color", "red");
            return false;
        }
        else{
            $("#validateNameMsg").text("");
            return true;
        }
    })

    $("#registerForm").submit(function(event) {

        var isIdValid = idDupl();
        var isPwValid = pwSame();
        var isNameValid = $("#memberName").val() !== "" && /^[가-힣]{2,5}$/.test($("#memberName").val()); // 이름 검증 추가
        var isPwRegExpValid = $("#memberPw").val() !== "" && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test($("#memberPw").val());
        var isIdRegExpValid = $("#memberId").val() !== "" && /^[a-z0-9A-Z]{5,50}$/.test($("#memberId").val());
        
        console.log(isIdValid);
        console.log(isPwValid);
        console.log(isNameValid);
        console.log(isPwRegExpValid);
        console.log(isIdRegExpValid);

        // 모든 조건이 충족되었는지 확인
        if (isIdValid && isPwValid && isNameValid && isPwRegExpValid && isIdRegExpValid) {
            // 모든 조건이 충족되었을 때 폼 제출 허용
            window.location.replace("/login.html");
        } else {
            // 하나라도 조건이 충족되지 않았을 때 폼 제출 막기
            event.preventDefault();
            alert("양식을 모두 올바르게 입력해주세요.");
        }
    })
})