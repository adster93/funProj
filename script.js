

var url = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/stuff?'

app.controller('practicehttp', function($scope, $http) {
   $http.get(
                    url,
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                ).
                success(function(data, status) {
              
                    console.log(data)
                })
    })


