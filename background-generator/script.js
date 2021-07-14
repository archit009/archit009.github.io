var gradientCode = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("colorPicker");
var copyBtn=document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	gradientCode.textContent = body.style.background + ";";
}

    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);


    function CopyToClipboard(code)
    {
    var r = document.createRange();
    r.selectNode(document.getElementById("code"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    }
copyBtn.addEventListener("click", CopyToClipboard);

