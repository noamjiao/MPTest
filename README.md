# First Question Result

1. If entered all correct:

	<img src="/Users/aidenjiao/Desktop/桌面/面试及OA准备/已投递/mealPal/mealpal/image-20230414020530367.png" alt="image-20230414020530367" style="zoom:50%;" />
	
	<img src="/Users/aidenjiao/Desktop/桌面/面试及OA准备/已投递/mealPal/mealpal/image-20230414020543211.png" alt="image-20230414020543211" style="zoom:50%;" />



2. If entered name wrong:

	<img src="/Users/aidenjiao/Desktop/桌面/面试及OA准备/已投递/mealPal/mealpal/image-20230414020625345.png" alt="image-20230414020625345" style="zoom:50%;" />

3. If Phone Number wrong:

	<img src="/Users/aidenjiao/Desktop/桌面/面试及OA准备/已投递/mealPal/mealpal/image-20230414020652876.png" alt="image-20230414020652876" style="zoom:50%;" />

# Second Question Result

1. For valid result test command:

```Curl
curl -X POST -H "Content-Type: application/json" -d "{\"guest\": {\"full_name\": \"John Doe\", \"phone_number\": \"1234567890\"}}" http://localhost:3000/api/v1/guests
```

2. For invalid test command:

```Curl
curl -X POST -H "Content-Type: application/json" -d "{\"guest\": {\"full_name\": \"\", \"phone_number\": \"invalid_number\"}}" http://localhost:3000/api/v1/guests
```

3. Result shown in the below screenshot:

<img src="./image-20230414172511552-3666208.png" alt="image-20230414172511552" style="zoom:50%;" />