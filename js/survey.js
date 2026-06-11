const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyvAKH75bL5iSh2EaobMqaBLBXBxMOd1k1TALVS1xZGgebU35nqK9iBwYzWzHodbvZMeA/exec";

document.getElementById("surveyForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = {
        surveyType : "personal",
        row : [
            new Date().toLocaleString(),
            document.getElementById("name").value,
            document.getElementById("phone").value,
            document.getElementById("email").value,
            document.getElementById("interest").value
        ]
    };

    try{

        const response = await fetch(SCRIPT_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });

        const result = await response.json();

        if(result.success){
            alert("제출 완료");
            document.getElementById("surveyForm").reset();
        }else{
            alert("오류 : "+result.error);
        }

    }catch(err){
        console.error(err);
        alert("전송 실패");
    }

});
