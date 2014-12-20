<?php

class ApiController extends Controller
{

    protected $statusCode = 200;

    const HTTP_OK = 200; //Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
    const HTTP_CREATED = 201; //Response to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
    const HTTP_NO_CONTENT = 204; //Response to a successful request that won't be returning a body (like a DELETE request)
    const HTTP_NOT_MODIFIED = 304; //Used when HTTP caching headers are in play
    const HTTP_BAD_REQUEST = 400; //The request is malformed, such as if the body does not parse
    const HTTP_UNAUTHORIZED = 401; //When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
    const HTTP_FORBIDDEN = 403; //When authentication succeeded but authenticated user doesn't have access to the resource
    const HTTP_NOT_FOUND = 404; //When a non-existent resource is requested
    const HTTP_INTERNAL_SERVER_ERROR = 500; //Internal Server Error

    protected function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    protected function getStatusCode()
    {
        return $this->statusCode;
    }

    protected function respondNotFound($message = 'Not found!')
    {
        return $this->setStatusCode(self::HTTP_NOT_FOUND)->respondWithError($message);
    }

    protected function respondWithError($message)
    {
        return $this->respond([
            'error' => [
                'message' => $message,
                'status_code' => $this->getStatusCode()
            ]
        ]);
    }

    protected function respondOk($message = 'Request Successful!')
    {
        return $this->setStatusCode(self::HTTP_OK)->respond([
            'message' => $message
        ]);
    }

    protected function respondData($data = [])
    {
        return $this->setStatusCode(self::HTTP_OK)->respond([
            'data' => $data
        ]);
    }

    protected function respondResource(\Illuminate\Database\Eloquent\Model $resource)
    {
        return $this->setStatusCode(self::HTTP_OK)->respond(['data' => $resource]);
    }

    protected function respond($data, $headers = [])
    {
        return Response::json($data, $this->getStatusCode(), $headers);
    }

	public function getUserId()
	{
		return Auth::user()->id;
	}

}