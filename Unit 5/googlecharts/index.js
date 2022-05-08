window.onload=()=>{
    //geochart
    // google.charts.load('current', {'packages':['geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}); 
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    drawChart();
}

function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 0.5],
      ['Zucchini', 4],
      ['Pepperoni', 2]
    ]);
   /*  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]); */

    // Set chart options

    /* var options = {
        'title':'How Much Pizza I Ate Last Night',
        'width':400,
        'height':300
    }; */

    //Making a 3D Pie Chart
    /* var options = {
        title: 'My Daily Activities',
        is3D: true,
    };
 */
//You can't combine the pieHole and is3D options; if you do, pieHole will be ignored.
//Making a Donut Chart
    /* var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
    }; */

    //Rotating a Pie Chart
    /* var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Swiss Language Use (100 degree rotation)',
        pieStartAngle: 100,
    }; */

//Exploding a Slice
//You can separate pie slices from the rest of the chart with the offset property of the slices option: 
   /*  var options = {
        title: 'Indian Language Use',
        legend: 'none',
        pieSliceText: 'label',
        slices: {  
            2: {offset: 0.5},
            4: {offset: 0.2},
            1:{offset: 0.6}
        },
      }; */

    //Removing Slices
//To omit a slice, change the color to 'transparent':
    /* var options = {
        pieSliceText: 'label',
        slices: {
            0: { color: 'yellow' },
            1: { color: 'transparent' }
        }
    }; */


    //Slice Visibility Threshold
    // PAra agrupar los que son menores de un limite de porcentaje que le aplicamos como
    // -->5/8 // This is equivalent to 0.625 or 62.5% of the chart.

    var options = {
        title: 'Popularity of Types of Pizza',
        sliceVisibilityThreshold: 0.096
    };

   
    //GEOCHART
    /* var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['South America', 600],
        ['Canada', 500],
        ['France', 600],
        ['Russia', 700],
        ['Australia', 600]
      ]);
 
      var options = { displayMode: 'text' };
      var chart = new google.visualization.GeoChart(document.getElementById('chart_div')); */

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
