---
sidebar_position: 1
---
 
# API Tutorial: RollAsBack and HTTP Features

This tutorial provides an overview and usage examples of the `RollAsBack` framework along with HTTP features such as `Redirect`, `Blink`, `Cookie`, and `HttpResponse`. The tutorial demonstrates the creation of endpoints, handling different HTTP methods, and utilizing various response types.

## RollAsBack imports

```python
from src.rollasback.app import RollAsBack
from src.rollasback.redirect import Redirect
from src.rollasback.cookie import Cookie
from src.rollasback.http_response import HttpResponse
```

## Creating Endpoints

Endpoints are created using the `@api.endpoint` decorator.

### Creating endpoints
 
```python
@api.endpoint("/asd")
def func(request):
    # ...  implement a full method here
```

 
## Handling Different HTTP Methods

```python
@api.endpoint("/asd")
def func(request):
    if request.method != "GET":
        # ... (see the provided func method in the code)
```

## Working with Cookies

```python
response.set_cookie(
    cookie=Cookie(
        key="session_id", value="123456789", expires="2024-01-30", path="/app",
        domain="example.com", secure=True, httponly=True
    )
)
```

## Starting the Server

```python
api.start_server(host="127.0.0.1", port=8888)
```

## Running the Example

To run the provided example, make sure to execute the script containing the API code.

```bash
python your_api_script.py
```

Replace `your_api_script.py` with the actual filename containing your API code.

This tutorial covers basic usage of the `RollAsBack` framework and various HTTP features. Feel free to explore and customize based on your application requirements.

Happy coding!
