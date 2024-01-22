import sys

for i in sys.argv:
    if 'install' in sys.argv:
        print(f'installing {sys.argv[2]}')
    print(sys.argv)