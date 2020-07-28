let contactos = []

$(document).ready(function(){

    cargarDatos();

    $('.btn').on('click',function(){

        let formulario = $(this).parent().parent();
        const contacto = new Contacto(formulario.find('#txt_nombre').val(), formulario.find('#txt_telefono').val(), formulario.find('#txt_email').val(), "Calle 13 # 88-87");
        contactos.push(contacto);

        let row = $('<div class="row"></div>');
        row.prepend('<div class="col-12"></div>');
        row.find('.col-12').prepend('<div class="card mb-3"></div>');
        row.find('.card').prepend('<div class="row no-gutters"></div>');
        row.find('.row').prepend('<div class="col-md-4"></div>');
        row.find('.row').append('<div class="col-md-8"></div>');
        row.find('.col-md-8').prepend('<div class="card-body"></div>');
        row.find('.card-body').append('<h5 class="card-title">'+formulario.find('#txt_nombre').val()+'</h5>');
        row.find('.card-body').append('<p class="card-text">'+formulario.find('#txt_telefono').val()+'</p>');
        row.find('.card-body').append('<p class="card-text">'+formulario.find('#txt_email').val()+'</p>');
        row.find('.card').on('click', cambiarColorTarjeta);
        $('#listaContactos').find('h2').after(row);
    });

    function cambiarColorTarjeta(){
        $('.card').removeClass('text-white bg-info');
        $(this).addClass('text-white bg-info');
    }

    $('#cargarContactos').on('click',function(event){
        event.preventDefault();
        $.ajax({
            type: $('form').attr("method"),
            url: $('form').attr("method"),
            data:  $('form').serialize(),
            succes: function(data){
                console.log(data);
            
            }
        })
    })
});

class Contacto{
    constructor(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

}
