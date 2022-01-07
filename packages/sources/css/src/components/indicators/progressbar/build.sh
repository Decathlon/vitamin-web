postcss src/index.css -o dist/index.css \
&& cross-env FONT_SIZE_BASE=10 postcss src/index.css -o dist/index-base10.css \
&& cross-env KEEP_VARS=true postcss src/index.css -o dist/index-with-vars.css \
&& cross-env KEEP_VARS=true FONT_SIZE_BASE=10 postcss src/index.css -o dist/index-with-vars-base10.css \
