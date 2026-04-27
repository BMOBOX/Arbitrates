from ..workers.celery_worker import celery
from ..services.docker_service import run_container

@celery.task(bind=True, max_retries=3)
def process_webhook(self, event_type, delivery_id, payload):
    try:
        print("agent processing: ", event_type)
        # your agent logic here
        repo_url = payload["repository"]["clone_url"]
        resp = run_container(repo_url, delivery_id)
    except Exception as exc:
        raise self.retry(exc=exc, countdown=5)  # retry after 5s
