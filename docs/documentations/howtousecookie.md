---
sidebar_position: 2
---

 
# API Tutorial: Cookie and CookieJar

This tutorial provides an overview and usage examples of the `Cookie` and `CookieJar` classes from the `rollasback` module. These classes are designed for managing and manipulating HTTP cookies in Python applications.

## Cookie Class

### Cookie Creation

To create a new cookie, use the `Cookie` class constructor with relevant parameters:

```python
cookie = Cookie(
    key='session_id', value='123456789', expires='2024-01-30', path='/app', domain='example.com',
    secure=True, httponly=True
)
```

Attributes:

- `key`: Cookie key
- `value`: Cookie value
- `expires`: Expiration date (as a string or `datetime` object)
- `path`: Cookie path
- `domain`: Cookie domain
- `secure`: Whether the cookie is secure (boolean)
- `httponly`: Whether the cookie is HTTP-only (boolean)

### Example Test

```python
def test_cookie_creation(self):
    # ... (see the provided test_cookie_creation method in the code)
```

## CookieJar Class

### Cookie Jar Operations

The `CookieJar` class manages a collection of cookies.

```python
cookie_jar = CookieJar()
```

#### Adding Cookies

```python
cookie_jar.add_cookie(cookie1)
cookie_jar.add_cookie(cookie2)
```

#### Retrieving a Cookie by Key

```python
retrieved_cookie = cookie_jar.get_cookie('session_id')
```

#### Updating a Cookie

```python
cookie_jar.update_cookie(updated_cookie)
```

#### Deleting a Cookie

```python
cookie_jar.delete_cookie(deleted_cookie_key)
```

#### Displaying Cookies

```python
all_cookies_in_jar = cookie_jar.get_all_cookies()
```

### Example Test

```python
def test_cookie_jar_operations(self):
    # ... (see the provided test_cookie_jar_operations method in the code)
```

### Additional Operations

Other operations include getting the cookie header string and the cookie dictionary:

```python
cookie_header_string = cookie_jar.get_cookie_header()
cookie_dict = cookie_jar.get_cookie_dict()
```

### Conclusion

This tutorial covers basic operations with the `Cookie` and `CookieJar` classes. By incorporating these classes into your Python applications, you can easily manage and manipulate HTTP cookies.

## Running Tests

To run the provided tests, execute the following command:

```bash
python your_test_file.py
```

Replace `your_test_file.py` with the actual filename containing the test cases.

Happy coding!
