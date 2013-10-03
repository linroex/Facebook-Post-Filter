$(document).ready(function(){
    chrome.storage.sync.get('block.keyword',function(r){
        $('textarea').html(r['block.keyword']);
    });
    chrome.storage.sync.get('switcher',function(e){
        
        if(e['switcher']=='on'){
            $('#switcher').html('停用');
            
        }else if(e['switcher']=='off'){
            $('#switcher').html('啟用');
            
        }
    });
    $('#submit').click(function(){
        chrome.storage.sync.set({'block.keyword':$('textarea').val()},function(){
            chrome.storage.sync.get('block.keyword',function(r){
                $('textarea').html(r['block.keyword']);
            })    
        });
        
            
    })
    $('#switcher').click(function(){
        chrome.storage.sync.get('switcher',function(e){
            
            if(e['switcher']=='on'){
                $('#switcher').html('啟用');
                chrome.storage.sync.set({'switcher':'off'});
            }else if(e['switcher']=='off'){
                $('#switcher').html('停用');
                chrome.storage.sync.set({'switcher':'on'});
            }
        });
        
    });
})