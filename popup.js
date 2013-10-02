$(document).ready(function(){
    chrome.storage.sync.get('block.keyword',function(r){
        $('textarea').html(r['block.keyword']);
    })
    
    $('#submit').click(function(){
        chrome.storage.sync.set({'block.keyword':$('textarea').val()});
        chrome.storage.sync.get('block.keyword',function(r){
            $('textarea').html(r['block.keyword']);
        })
            
    })

})