(function () {
    tinymce.create('tinymce.plugins.CustomHTML', {
        init: function (ed, url) {
            ed.addButton('custom', {
                title: 'Custom HTML',
                image: url + '/img/custom.png',
                onclick: function () {
                    var html = '<span class="custom">Some HTML</span>';
                    
                    ed.execCommand('mceInsertContent', false, html);
                }
            });
        }
    });
    tinymce.PluginManager.add('custom', tinymce.plugins.CustomHTML);
})();
