var copyEmailBtn = document.querySelector('.js-emailCopyBtn');

copyEmailBtn.addEventListener('click', function () {
    var emailLink = document.querySelector('.emailLink');
    var range=document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email' +  msg);
    } catch (err) {console.log('Warning');}

    window.getSelection().removeAllRanges();
})

var copyPhoneBtn = document.querySelector('.js-phoneCopyBtn');

copyPhoneBtn.addEventListener('click', function () {
    var phoneLink = document.querySelector('.phoneLink');
    var range=document.createRange();
    range.selectNode(phoneLink);
    window.getSelection().addRange(range);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy phone' +  msg);
    } catch (err) {console.log('Warning');}

    window.getSelection().removeAllRanges();
})