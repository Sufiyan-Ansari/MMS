

$(document).ready(function(){
    
    $("#main-button").click(function(event){
        event.preventDefault();
        let formData =
    {
        block : $('#block').val(),
        flatNo : $('#flatno').val(),
       

    }
        $.ajax({
            type:'POST',
         //   data1 : JSON.stringify(formData),
            contentType : "application/json",
             url : '/getDetails',
            success : function(status){
            
                console.log('success');
                $('#status').html(formData);
            },
            error : function(e)
            {
                console.log('ERROR',e);
            }
            
        })
    })
})

