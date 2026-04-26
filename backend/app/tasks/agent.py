from ..workers.celery_worker import celery
from ..services.docker_service import run_container

@celery.task(bind=True, max_retries=3)
def process_webhook(self, event_type, delivery_id, payload):
    try:
        # your agent logic here
        repo_url = payload["repository"]["clone_url"]
        run_container(repo_url)
        print(f"Agent processing: {event_type}")
    except Exception as exc:
        raise self.retry(exc=exc, countdown=5)  # retry after 5s
