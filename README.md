## svg-sprite-brunch

Adds concatenation svg sprite generation support to [brunch](http://brunch.io).

## Usage

Install the plugin via npm with `npm install --save-dev svg-sprite-brunch`.

Or, do manual install:

* Add `"svg-sprite-brunch": "~x.y.z"` to `package.json` of your brunch app.
* If you want to use git version of plugin, use the GitHub URI
`"svgo-brunch": "thomas-gordon/svgo-brunch"`.

Now, inside the 'assets' directory, create a 'sprite' directory and dump your
svgs inside there. As you do, the 

##Options

You can pass any SVGO option to brunch-config, for example:
        
        module.exports = {
            plugins: {
                svgo: {
                    plugins: [
                        {'removeTitle': true}
                    ]
                }
            }
        }


## License

The MIT License (MIT)

Copyright (c) 2016 Tom Gordon (http://tomgordon.me)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
