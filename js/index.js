$(document).ready(function() {

    const dataURL = "../swaps.json";

    $.getJSON(dataURL, (jsonData) => {

        for (var i = 0; i < jsonData['swaps'].length; i++) {

            var dataHandle = jsonData['swaps'][i];

            var data = `<div class="listing">
                            <div class="rollNo"><a href="mailto:${dataHandle.rollNo}@lhr.nu.edu.pk">${dataHandle.rollNo}</a></div>
                            <div class="course">${dataHandle.course}</div>
                            <div class="from">${dataHandle.from}</div>
                            <div class="toText">to</div>
                            <div class="to">${dataHandle.to}</div>
                        </div><br/>`


            $('#listings').append(data);


        }

    });


});