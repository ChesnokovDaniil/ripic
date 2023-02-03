(function () {
    chrome.storage.local.get(null, function (storage) {
        var collections = storage.collections;
        var i = 'my';
        if (Object.keys(storage.collections['my'].items).length != 0) {
            let item = `
                <div data-key="${i}" class="list-group-item d-flex justify-content-between align-items-center collapsed " data-toggle="collapse" data-parent="#list-content" data-target="#${i}" aria-expanded="true">
                    <a class="pack-name">MY                       
                        <span class="badge badge-primary badge-pill" style="background: #25d366 !important">${Object.keys(storage.collections[i].items).length}</span>
                    </a>
                    <a href="#" class="card-link delete-pack" title="Delete ${storage.collections[i].name}" data-key="${i}">Delete All</a>                                      
                </div>
                    
                 `;
            $('#list-content').append(item)

            let list = `<div>`;
            for (let y in collections[i].items) {
                let sticker = collections[i].items[y];
                if (sticker == null)
                    continue;
                list += `<div id="sticker-${y}" class="item-row">
                              <span class="sticker-image" style="
                                background-image: url(${sticker.image});
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-position: center center;
                                width: 40px;
                                height: 40px; display: inline-block;
                                vertical-align: middle;
                                border-style: none;
                                margin-right: 5px;                              
                            
                            "></span>
                            <span class="sticker-name">${sticker.name}</span>
                            <a href="#" title='Delete ${sticker.name}' data-sticker-id="${sticker.id}" data-pack="${i}" class="delete-sticker" style="float: right; padding: 11px">
                            
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"/></svg>

</a>
                        </div>`;
            }
            list += "</div>"


            let packs = `                               
                <div class='collapse' id="${i}" style="background-color: #f7f7f9">                                                                                              
                  <div style="padding-bottom: 10px; padding-top: 10px;">                        
                         ${list}
                      </div>
                </div>`;
            $('#list-content').append(packs)
        }

        for (let i in storage.collections) {
            if (i == 'my') {
            } else {
                if (Object.keys(storage.collections[i].items).length != 0) {
                    let item = `
                <div data-key="${i}" class="list-group-item d-flex justify-content-between align-items-center collapsed " data-toggle="collapse" data-parent="#list-content" data-target="#${i}" aria-expanded="true">
                    <a class="pack-name">${storage.collections[i].name}                       
                        <span class="badge badge-primary badge-pill" style="background: #25d366 !important">${Object.keys(storage.collections[i].items).length}</span>
                    </a>
                    <a href="#" class="card-link delete-pack" title="Delete ${storage.collections[i].name}" data-key="${i}">Delete All</a>                                      
                </div>
                    
                 `;
                    $('#list-content').append(item)

                    let list = `<div class="" >`;
                    for (let y in collections[i].items) {
                        let sticker = collections[i].items[y];
                        if (sticker == null)
                            continue;
                        list += `<div id="sticker-${y}" class="item-row">
                            <span class="sticker-image" style="
                                background-image: url(${sticker.image});
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-position: center center;
                                width: 40px;
                                height: 40px; display: inline-block;
                                vertical-align: middle;
                                border-style: none;
                                margin-right: 5px;                              
                            
                            "></span>
                            
                            <span class="sticker-name">${sticker.name}</span>
                            <a href="javascript:void(0)" title='Delete ${sticker.name}' data-sticker-id="${sticker.id}" data-pack="${i}" class="delete-sticker" style="float: right; padding: 11px">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"/></svg>
                            </a>
                        </div>`;
                    }
                    list += "</div>"


                    let packs = `                               
                <div class='collapse' id="${i}" style="background-color: #f7f7f9">                                                                                              
                  <div style="padding-bottom: 10px; padding-top: 10px;">                        
                         ${list}
                      </div>
                </div>`;
                    $('#list-content').append(packs)
                }
            }


        }

        $('.collapse:first').addClass('show')

        $('.collapse').on('shown.bs.collapse', function () {
            $(`[data-key='${$(this).attr('id')}']`).find(".fas").removeClass("fa-caret-down").addClass("fa-caret-up");
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(`[data-key='${$(this).attr('id')}']`).find(".fas").removeClass("fa-caret-up").addClass("fa-caret-down");
        });


        $('.delete-pack').on('click', function (e) {
            let message = 'Remove sticker pack?';
            if (confirm(message)) {
                let key = $(this).data('key')
                $(`#${key}`).hide(1000).remove();
                $(`[data-key=${key}]`).hide(1000).remove();
                if (key == 'my') {
                    collections[key].items = {};
                } else {
                    delete collections[key];
                }

                $('.collapse:first').addClass('show')
                chrome.storage.local.set({
                    collections: collections
                });
            } else {

            }

            e.preventDefault();
        });

        $('.delete-sticker').on('click', function (e) {
            let message = 'Remove sticker?';
            if (confirm(message)) {
                let packKey = $(this).data('pack');
                let stickerKey = $(this).data('sticker-id');

                delete collections[packKey].items[stickerKey];
                chrome.storage.local.set({collections: collections});
                $(`#sticker-${stickerKey}`).remove()

                $(`[data-key=${packKey}]`).find('span').text(Object.keys(collections[packKey].items).length);
                if (Object.keys(collections[packKey].items).length == 0) {
                    $(`.delete-pack[data-key='${packKey}']`).click()
                }
            } else {

            }


        });
        $('.manage-pack').on('click', function (e) {
            let packKey = $(this).data('key');
            $(`#pack-${packKey}`).removeClass('d-none');
            e.preventDefault()
        })


        $('.collapse').on('show.bs.collapse', function () {
            $('.collapse.show').each(function () {
                $(this).collapse('hide');
            });
        });

        $('#content').css({
            'min-height': ($(window).height() - 321)
        })
        window.onresize = () => {
            $('#content').css({
                'min-height': ($(window).height() - 321)
            })
        }


    })
})();