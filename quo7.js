function htmlxml(str) {
    if ((str===null) || (str===''))
    return false;
    else
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
 }
console.log(htmlxml("console.log(strip_tags('<p><strong><em>SkillSantaAssignments</em></strong></p>'));"));