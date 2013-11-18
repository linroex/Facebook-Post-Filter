$(document).ready(function(){
    chrome.storage.sync.get('block.keyword', function(r) {
        $('textarea').html(r['block.keyword']);
    });

    chrome.storage.sync.get('switcher', function(e) {
        if (e['switcher'] === 'on') {
            $('#switcher').html('停用');
        } else if (e['switcher'] === 'off') {
            $('#switcher').html('啟用');
        }
    });

    chrome.storage.sync.get('fullFilter',function(e){
        $('#fullFilter').prop('checked', e['fullFilter']);
    });

    chrome.storage.sync.get('adsFilter',function(e){
        $('#adsFilter').prop('checked', e['adsFilter']);
    });

    $('#submit').click(function(){
        chrome.storage.sync.set({'block.keyword':$('textarea').val()}, function() {
            chrome.storage.sync.get('block.keyword', function(r) {
                $('textarea').html(r['block.keyword']);
                chrome.tabs.reload();
                window.close();
            });
        });
    });

    $('#switcher').click(function() {
        chrome.storage.sync.get('switcher', function(e) {
            if (e['switcher'] === 'on') {
                $('#switcher').html('啟用');
                chrome.storage.sync.set({'switcher':'off'});
            } else if (e['switcher'] === 'off') {
                $('#switcher').html('停用');
                chrome.storage.sync.set({'switcher':'on'});
            }
            $('.notice').css('display','block');
            $('.notice').html('重新整理頁面後方會啟用');
        });
    });

    $('#fullFilter').change(function() {
         console.log($('#fullFilter').prop('checked'));
         chrome.storage.sync.set({
             'fullFilter': $('#fullFilter').prop('checked')
         });

         chrome.tabs.reload();
    });

    $('#adsFilter').change(function() {
         console.log($('#adsFilter').prop('checked'));
         chrome.storage.sync.set({
             'adsFilter': $('#adsFilter').prop('checked')
         });

         chrome.tabs.reload();
    });
});
