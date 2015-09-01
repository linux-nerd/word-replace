/**
 * Add a format method to the prototype of String Class
 * Inorder to achieve python's format method functionality
 *
 * Usage -
 * var formattedString = "hi $0 $1 $2 $3.".format(["pk", "bk", "ck", "dk"]); //hi pk, bk, ck, dk
 *
 * @param {array} [args] [list of strings, that has to be replaced]
 * @return {string} Returns the string with replaced text.
 */

(function(fn){
  if(typeof module !== 'undefined' && module.exports){
    module.exports = fn;
  }else{
    fn();
  }
})(function(){
  String.prototype.format = function(args){

    var str = this.toString(),
        result = str.match(/\$[0-9]+/gi),
        mapper = {};


    if(args.length < result.length)
      throw new Error("Index out of range.");


    for(var i = 0; i < result.length; i++){
      //create a mapper
      mapper[result[i]] = args[parseInt(result[i].replace("$", ""), 10)]
    }

    for(var i = 0; i < result.length; i++){
      str = str.replace(result[i], mapper[result[i]]);
    }


    return str;
  };
});
