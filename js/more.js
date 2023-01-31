function showMore(id){
    document.getElementById(id+'Overflow').className='';
    document.getElementById(id+'MoreLink').className='hidden';
    document.getElementById(id+'LessLink').className='';
}

function showLess(id){
    document.getElementById(id+'Overflow').className='hidden';
    document.getElementById(id+'MoreLink').className='';
    document.getElementById(id+'LessLink').className='hidden';

}

let len = 100;
let shrinkables = document.getElementsByClassName('shrinkable');
if (shrinkables.length > 0) {
    for (let i = 0; i < shrinkables.length; i++){
        let fullText = shrinkables[i].nextElementSibling.innerHTML;

        console.log("fullText", shrinkables[i].nextElementSibling.innerHTML)

        if(fullText.length > len){
            let trunc = fullText.substring(0, len).replace(/\w+$/, '');
            let remainder = "";
            let id = i;
            remainder = fullText.substring(len, fullText.length);
            shrinkables[i].nextElementSibling.innerHTML = '<span>' + trunc + '<span class="hidden test" id="' + id + 'Overflow">'+ remainder +'</span></span>&nbsp;<a id="' + id + 'MoreLink" href="#!" onclick="showMore(\''+ id + '\');">More</a><a class="hidden" href="#!" id="' + id + 'LessLink" onclick="showLess(\''+ id + '\');">Less</a>';
            document.getElementById(id+'MoreLink').innerHTML= moreBtn.innerHTML;
            document.getElementById(id+'LessLink').innerHTML = lessBtn.innerHTML;
        }
    }
}
