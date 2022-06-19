/**
 * app.css
 */
import './jquery'
import '@fancyapps/fancybox/dist/jquery.fancybox'
import './gallery'


window.jQuery('[data-fancybox="gallery"]').fancybox({
  buttons : [
    'download',
    'thumbs',
    'close'
  ],
  afterLoad : function(instance, current) {
    document.querySelector("a[data-fancybox-download]").setAttribute('href', current.src.replace("large", "full"))
  }
});
