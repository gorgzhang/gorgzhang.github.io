import glob

fileNames = []

for file in glob.glob("*.json"):
	if file != 'join.py' and file != 'data.json' and file != 'us_state_capitals.json':
		fileNames.append(file)


def mangle(s):
    return s.strip()[1:-1]

def cat_json(output_filename, input_filenames):
    with open(output_filename, "w") as outfile:
        first = True
        for infile_name in input_filenames:
            with open(infile_name) as infile:
                print(infile_name)
                if first:
                    outfile.write('[')
                    first = False
                else:
                    outfile.write(',')
                x = mangle(infile.read())
                f1 = x.index("[")
                f2 = x.index("]")
                x = x[f1:(f2 + 1)]
                outfile.write(x)
        outfile.write(']')


cat_json('data.json',fileNames)