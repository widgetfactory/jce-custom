(function () {
    tinymce.create('tinymce.plugins.CustomHTML', {
        init: function (ed, url) {
            ed.addButton('custom1', {
                title: 'Custom HTML 1',
                image: url + '/img/custom1.png',
                onclick: function () {
                    var html = '<span class="custom1">Some HTML</span>';
                    
                    ed.execCommand('mceInsertContent', false, html);
                }
            });
            ed.addButton('custom2', {
                title: 'Custom HTML 2',
                image: url + '/img/custom2.png',
                onclick: function () {
                    var html = '<span class="custom2">Some More HTML</span>';
                    
                    ed.execCommand('mceInsertContent', false, html);
                }
            });
        }
    });
    tinymce.PluginManager.add('custom', tinymce.plugins.CustomHTML);
})();
