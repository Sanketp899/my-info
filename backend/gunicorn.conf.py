import multiprocessing

bind = "0.0.0.0:8000"
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "gthread"
threads = 2

max_requests = 1000
max_requests_jitter = 50

timeout = 30
keepalive = 5 