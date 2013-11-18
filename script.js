$(document).ready(function(){
    chrome.storage.sync.get(['switcher', 'fullFilter', 'adsFilter'],function(e){
        if (e['fullFilter'] == undefined) {
             chrome.storage.sync.set({
                 'fullFilter': $('#fullFilter').prop('checked')
             });
        }

        if (e['adsFilter'] == undefined) {
             chrome.storage.sync.set({
                 'adsFilter': $('#adsFilter').prop('checked')
             });
        }

        if(e['switcher']=='on'){
            console.log('Load Facebook Post Filter');  
            filter();
            $("#contentArea").bind("DOMNodeInserted",function(){
                filter();
            });
        }else if(e['switcher']==undefined){
            chrome.storage.sync.set({'switcher':'on'});
        };
    })
})

function filter(){
    chrome.storage.sync.get(['block.keyword', 'fullFilter', 'adsFilter'],function(r){
        if(r['block.keyword'].trim()!=''){
            var keyword = r['block.keyword'].split(/[\s,]+/);
            for (var i = 0; i<keyword.length; i++) {
                $('._5jmm:contains("' + keyword[i] + '")').fadeOut();
                $('.storyContent:contains("' + keyword[i] + '")').fadeOut();
                if (r['fullFilter']) {
                    $('.timelineUnitContainer:contains("' + keyword[i] + '")').fadeOut();
                    $('.permalink_stream:contains("' + keyword[i] + '")').fadeOut();
                }

                if (r['adsFilter']) {
                    $('#pagelet_ego_pane').fadeOut();
                }
            };    
        }
    })
}
