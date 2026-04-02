document.addEventListener('DOMContentLoaded', function() {
    console.log('Young Vibe scripts cargados');

    let badge = document.createElement('div');
    badge.textContent = 'Estilo Juvenil Activado!';
    badge.style = 'position: fixed; bottom: 18px; right: 18px; padding: 12px 16px; background: rgba(255, 88, 150, 0.95); color: #fff; font-weight: 700; border-radius: 8px; z-index: 9999; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);';
    document.body.appendChild(badge);
    setTimeout(function(){ badge.remove(); }, 6000);

    document.querySelectorAll('.btn-success, .nav-icon').forEach(function(el){
        el.style.transition = 'transform .2s ease, box-shadow .2s ease';
        el.addEventListener('mouseenter', function(){
            this.style.transform = 'scale(1.08)';
            this.style.boxShadow = '0 8px 18px rgba(255, 88, 150, 0.3)';
        });
        el.addEventListener('mouseleave', function(){
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });

    document.querySelectorAll('.btn-success').forEach(function(btn){
        btn.addEventListener('click', function(){
            let toast = document.createElement('div');
            toast.textContent = 'Agregado al carrito con estilo juvenil!';
            toast.style = 'position: fixed; bottom: 90px; right: 22px; background: rgba(66, 211, 255, 0.95); color: #0f1f4f; font-weight: 700; padding: 10px 14px; border-radius: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.24); z-index:10000;';
            document.body.appendChild(toast);
            setTimeout(function(){ toast.remove(); }, 2500);
        });
    });
});
