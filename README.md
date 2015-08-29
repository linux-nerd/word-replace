# word-replace

Pyhton has a format method on string object, which is very handy, when it comes to string manipulation. Javascript has no such method. If we have to deal with any string manipulation we have the ugly way of doing it - concatination.
word-replace.js is inspired from Python's format method on string object.

Installation
-----------

1. Get word-replace in one of the following ways:
  - Download word-replace.js and place the file in your working folder.
  - **Bower**
    - ```bower install word-replace```

2. Include word-replace.js in your script tag.

    <script src="path/to/replace-word.js"></script>


Usage
-----

    var formattedString = "hi $0 $1 $2 $3.".format(["pk", "bk", "ck", "dk"]); // hi pk bk ck dk.
