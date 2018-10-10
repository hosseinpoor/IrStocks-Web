$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
            ['', 'EPS', 'روز متوقف', 'شاخص کل', 'ذوب', 'فلزات اساسی'],
            [0, null, null, 822, 998, 850],
            [1, null, null, 899, 1268, 888],
            [2, null, 1400, 887, 807, 997],
            [3, null, 1400, 815, 968, 915],
            [4, null, 1400, 829, 1026, 966],
            [5, null, null, 822, 998, 1050],
            [6, null, null, 999, 1268, 888],
            [7, null, null, 887, 807, 997],
            [8, 1000, 1400, 815, 968, 815],
            [9, null, null, 829, 1026, 866],
            [10, null, null, 1022, 998, 1050],
            [11, null, null, 1099, 1268, 888],
            [12, null, null, 1087, 807, 897],
            [13, null, null, 815, 968, 815],
            [14, null, null, 829, 1026, 866],
        ]);

        var options = {
            legend: {
                position: 'bottom',
                textStyle: {
                    fontName: 'bhoma',
                    fontSize: '24'
                }
            },
            vAxis: {
                textStyle: {
                    fontName: 'bhoma',
                    fontSize: '24'
                },
                viewWindow: {
                    min: 600,
                    max: 1400
                }
            },
            hAxis: {
                textStyle: {
                    fontName: 'bhoma',
                    fontSize: '24'
                },
                gridlines: {
                    color: 'transparent'
                },
                ticks: [{v: 0, f: ''}, {v: 2, f: 'تیر'}, {v: 4, f: 'مرداد'}, {v: 6, f: 'شهریور'}, {
                    v: 8,
                    f: 'مهر'
                }, {v: 10, f: 'آبان'}, {v: 12, f: 'آذر'}, {v: 14, f: ''}]
            },
            seriesType: 'line',
            colors: ['#febf08', '#c0dfa7', '#395a7d', '#375121', '#86b25f'],
            series: {
                0: {pointSize: 20, pointShape: 'circle'},
                1: {type: 'bars'}
            },
            bar: {groupWidth: '100%'},
            'tooltip':
                {
                    trigger: 'none'
                }
            ,
            'chartArea':
                {
                    'width':
                        '90%', 'height':
                        '80%', top:
                        20
                }
            ,


        };

        chart.draw(data, options);
    }

})
;