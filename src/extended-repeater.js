function inspectString(string, separator) {
   return typeof(string) !== 'undefined' ? string : separator;
};

module.exports = function repeater(str, options ) {
   
    const repeatTimes = options.repeatTimes || 0;
    const separator = "" + inspectString(options.separator, '+');
    const additionSeparator = "" + inspectString(options.additionSeparator, "|");
    const addition = "" + inspectString(options.addition,"");
    const additionRepeatTimes = options.additionRepeatTimes || 0;

    str = "" + str;
    let result = [];
   
    for (i = 0; i < repeatTimes ; i++){
        let inArray = [];
        for(j = 0 ; j < additionRepeatTimes ; j++){
         inArray.push(addition);
        }
        if (inArray.length == 0 && addition != ""){
         inArray.push(addition);
        }

        result.push (str + inArray.join(additionSeparator));
    }
    return result.length != 0 ? result.join(separator) : str + (addition != "" ? addition : "");

}
