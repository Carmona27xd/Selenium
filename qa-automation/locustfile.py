from locust import HttpUser, task, between

class PharmacyUser(HttpUser):

    host = "http://localhost:8080"

    wait_time = between(1,2)

    @task
    def withdraw_medicine(self):
        payload = {
            "code": "PAR-01",
            "stock": 1
        }

        with self.client.post("/api/inventario/retiro", json=payload, catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            elif response.status_code == 400:
                #Sucees porque se connsidera un exito del servidor la prueba de estres
                response.success()
            else:
                response.failure(f"Fallo del servidor: HTTP {response.status_code}")