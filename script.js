

var url = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/orange?'

app.controller('practicehttp', function($scope, $http) {
	$scope.logIt = function() {
        console.log($scope.name);
    }
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

function createWord(word1, word2){
	split1 = word1.split('')
	supersplitter = split1.concat(word2.split(''))
	return supersplitter
}

console.log(createWord('hello', 'gamesession'))

