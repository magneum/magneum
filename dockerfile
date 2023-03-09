curl -L https://github.com/yt-dlp/yt-dlp/raw/master/public.key | gpg --import
gpg --verify SHA2-256SUMS.sig SHA2-256SUMS
gpg --verify SHA2-512SUMS.sig SHA2-512SUMS

python3 -m pip install -U pyinstaller -r requirements.txt
python3 devscripts/make_lazy_extractors.py
python3 pyinst.py