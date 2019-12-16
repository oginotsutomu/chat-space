$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      //メッセージに画像が含まれる場合のHTMLを作る
      var html =  `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.name}
                      </div>
                      <div class="upper-message__data">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <img class="lower-message__image "src=${message.image}>
                    </div>
                  </div>`
                return html
      } else {
      //メッセージに画像が含まれない場合のHTMLを作る
      var html =  `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.name}
                      </div>
                      <div class="upper-message__data">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
                return html

    }
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url:url,
      type:"POST",
      data:formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(content){
      var html = buildHTML(content);
      $(".messages").append(html);
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset('');
    })
    .fail(function(){
      alert('エラー');
    })
  })
})