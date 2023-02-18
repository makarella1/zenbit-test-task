interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface ApiError {
  message: string;
  error?: string;
  statusCode?: number;
}

interface Success {
  success: boolean;
}

interface Response {
  data: Success;
  error?: ApiError;
}

export const createFeedback = async (data: FormValues): Promise<Response> => {
  try {
    const response = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        data: { success: false },
        error: (await response.json()) as ApiError,
      };
    }

    return {
      data: { success: true },
    };
  } catch (error) {
    console.log(error);

    return {
      data: { success: false },
      error: { message: 'Unknown Error' },
    };
  }
};
