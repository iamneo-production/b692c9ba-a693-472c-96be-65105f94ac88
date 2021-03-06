USE [chessacademyadmission]
GO
/****** Object:  Table [dbo].[academy]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[academy](
	[academyid] [int] IDENTITY(1,1) NOT NULL,
	[academyname] [varchar](50) NOT NULL UNIQUE,
	[academycontactno] [varchar](10) NULL,
	[academyemail] [varchar](50) NULL,
	[academylocation] [varchar](50) NULL,
	[academydescription] [varchar](300) NULL,
	[academyimage] [varchar](50) NULL,
 CONSTRAINT [PK_academy] PRIMARY KEY CLUSTERED 
(
	[academyid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](25) NULL,
	[mobileNumber] [bigint] NULL,
	[userRole] [nvarchar](15) NULL,
 CONSTRAINT [PK__Admin__A9D10535A2233830] PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comments]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comments](
	[commentId] [int] IDENTITY(1,1) NOT NULL,
	[studentName] [varchar](50) NULL,
	[academyName] [varchar](50) NULL,
	[courseName] [varchar](50) NULL,
	[comment] [varchar](500) NULL,
 CONSTRAINT [PK_comments] PRIMARY KEY CLUSTERED 
(
	[commentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[course]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course](
	[courseId] [int] IDENTITY(1,1) NOT NULL,
	[coursename] [varchar](50) NULL,
	[duration] [varchar](50) NULL,
	[numberofstudent] [varchar](50) NULL,
	[timing] [varchar](50) NULL,
	[cdescription] [varchar](50) NULL,
	[academyname] [varchar](50) NULL,
 CONSTRAINT [PK_course] PRIMARY KEY CLUSTERED 
(
	[courseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Enrollment]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Enrollment](
	[enrollmentId] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [varchar](50) NULL,
	[lastName] [varchar](50) NULL,
	[gender] [varchar](50) NULL,
	[motherName] [varchar](50) NULL,
	[fatherName] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[age] [int] NULL,
	[phoneNumber1] [varchar](50) NULL,
	[phoneNumber2] [varchar](50) NULL,
	[houseno] [varchar](50) NULL,
	[streetname] [varchar](50) NULL,
	[areaname] [varchar](50) NULL,
	[pincode] [varchar](50) NULL,
	[statename] [varchar](50) NULL,
	[nationality] [varchar](50) NULL,
	[studentName] [varchar](50) NULL,
	[academyName] [varchar](50) NULL,
	[courseName] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Login]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Login](
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](25) NULL,
 CONSTRAINT [PK__Login__A9D105356207150E] PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[student]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[student](
	[studentId] [int] IDENTITY(1,1) NOT NULL,
	[firstname] [varchar](50) NULL,
	[email] [varchar](30) NULL,
	[mobilenumber] [varchar](10) NULL,
	[enrolledcourse] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 02-04-2022 01:11:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](25) NULL,
	[username] [nvarchar](25) NULL,
	[mobileNumber] [bigint] NULL,
	[userRole] [nvarchar](15) NULL,
 CONSTRAINT [PK__Users__A9D10535E29D705B] PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[academy] ON 

INSERT [dbo].[academy] ([academyid], [academyname], [academycontactno], [academyemail], [academylocation], [academydescription], [academyimage]) VALUES (4, N'Sample32', N'9874563210', N'sample3acad@gmail.com', N'Chennai', N'Fair Academy', N'secondOne.jpg')
INSERT [dbo].[academy] ([academyid], [academyname], [academycontactno], [academyemail], [academylocation], [academydescription], [academyimage]) VALUES (6, N'Sample 48', N'9876598765', N'sample48@gmail.com', N'HYD', N'Strong academy', N'best-chess.jpg')
INSERT [dbo].[academy] ([academyid], [academyname], [academycontactno], [academyemail], [academylocation], [academydescription], [academyimage]) VALUES (16, N'sample23', N'9999999988', N'samplesam@gmail.com', N'Chennai', N'good', N'chessIcon.jpg')
INSERT [dbo].[academy] ([academyid], [academyname], [academycontactno], [academyemail], [academylocation], [academydescription], [academyimage]) VALUES (19, N'Sample123', N'9876598765', N'sample123@gmail.com', N'HYD', N'Nice one', N'thirdOne.webp')
INSERT [dbo].[academy] ([academyid], [academyname], [academycontactno], [academyemail], [academylocation], [academydescription], [academyimage]) VALUES (20, N'Academy name ', N'9876598765', N'academyname@gmail.com', N'HYD', N'simple and nice', N'firstOne.jpeg')
SET IDENTITY_INSERT [dbo].[academy] OFF
GO
SET IDENTITY_INSERT [dbo].[comments] ON 

INSERT [dbo].[comments] ([commentId], [studentName], [academyName], [courseName], [comment]) VALUES (3, N'abctestuser', N'Sample', N'Basics', N'Good course')
INSERT [dbo].[comments] ([commentId], [studentName], [academyName], [courseName], [comment]) VALUES (5, N'raghuleswar', N'Sample', N'Basics', N'addd 123')
INSERT [dbo].[comments] ([commentId], [studentName], [academyName], [courseName], [comment]) VALUES (6, N'raghuleswar', N'Sample 48', N'Intermediate', N'Nice and great course')
INSERT [dbo].[comments] ([commentId], [studentName], [academyName], [courseName], [comment]) VALUES (7, N'raghuleswar', N'Sample123', N'Basic', N'Great course to learn')
SET IDENTITY_INSERT [dbo].[comments] OFF
GO
SET IDENTITY_INSERT [dbo].[course] ON 

INSERT [dbo].[course] ([courseId], [coursename], [duration], [numberofstudent], [timing], [cdescription], [academyname]) VALUES (3, N'Baiscs', N'4 weeks', N'25', N'9.00 to 12.00', N'Nice one', N'Sample32')
INSERT [dbo].[course] ([courseId], [coursename], [duration], [numberofstudent], [timing], [cdescription], [academyname]) VALUES (4, N'Advanced Sr', N'8 weeks', N'10', N'9.00 to 4.00', N'Great course', N'sample23')
INSERT [dbo].[course] ([courseId], [coursename], [duration], [numberofstudent], [timing], [cdescription], [academyname]) VALUES (5, N'Intermediate', N'6 weeks', N'15', N'9.00 to 1.00', N'Good', N'Sample 48')
INSERT [dbo].[course] ([courseId], [coursename], [duration], [numberofstudent], [timing], [cdescription], [academyname]) VALUES (6, N'Basic', N'4 weeks', N'30', N'9.00 to 1.30', N'Great', N'Sample123')
INSERT [dbo].[course] ([courseId], [coursename], [duration], [numberofstudent], [timing], [cdescription], [academyname]) VALUES (7, N'Advanced course', N'10 weeks', N'45', N'9.00 to 4.00', N'Good and great', N'Academy name')
SET IDENTITY_INSERT [dbo].[course] OFF
GO
SET IDENTITY_INSERT [dbo].[Enrollment] ON 

INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (2, N'Raghul', N'E', N'male', N'Eswaran', N'Shoba', N'raghuleswaran22@gmail.com', 22, N'9080785996', N'', N'4/599A', N'Rama Gondar Street Old Quarters', N'Old Quarters', N'636705', N'Tamil Nadu', N'Indian', N'prudhvi', N'Sample', N'Basics')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (3, N'Raghul', N'E', N'male', N'Eswaran', N'Shoba', N'raghuleswaran22@gmail.com', 23, N'9080785996', N'', N'4/599A', N'Rama Gondar Street Old Quarters', N'Old Quarters', N'636705', N'Tamil Nadu', N'Indian', N'', N'Sample2', N'Advanced')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (4, N'Prudhvi', N'P', N'', N'Abcd', N'Cdef', N'prudhvi@gmail.com', 22, N'9876543210', N'', N'137', N'Nedungal', N'Old Quarters', N'635112', N'Tamil Nadu', N'Indian', N'', N'Sample', N'Basics')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (10, N'Raghul', N'E', N'male', N'Eswaran', N'Shoba', N'raghuleswaran22@gmail.com', 12, N'9999999001', N'', N'137', N'Rama Gondar Street ', N'Old Quarters', N'636705', N'Tamil Nadu', N'Indian', N'raghuleswar', N'Sample123', N'Basic')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (6, N'Abdc', N'B', N'male', N'John', N'Jesyy', N'abc@gmail.com', 20, N'9876543210', N'', N'123', N'Donald street', N'Chennai', N'654321', N'Tamil Nadu', N'Indian', N'abctestuser', N'Sample', N'Basics')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (7, N'Raghul', N'E', N'male', N'Eswaran', N'Shoba', N'raghuleswaran22@gmail.com', 22, N'9080785996', N'', N'137', N'Rama Gondar Street Old Quarters', N'Old Quarters', N'636705', N'Tamil Nadu', N'Indian', N'raghuleswar', N'Sample 48', N'Intermediate')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (8, N'Raghul', N'E', N'male', N'Eswaran', N'Shoba', N'raghuleswaran22@gmail.com', 21, N'9190807859', N'', N'4/599A', N'Rama Gondar Street', N'Old Quarters', N'636705', N'Tamil Nadu', N'Indian', N'raghuleswar', N'sample23', N'Advanced Sr')
INSERT [dbo].[Enrollment] ([enrollmentId], [firstName], [lastName], [gender], [motherName], [fatherName], [email], [age], [phoneNumber1], [phoneNumber2], [houseno], [streetname], [areaname], [pincode], [statename], [nationality], [studentName], [academyName], [courseName]) VALUES (9, N'Abc', N'B', N'male', N'John', N'Jesyy', N'abc@gmail.com', 15, N'9876543210', N'', N'123', N'John street', N'Chennai', N'654321', N'Tamil Nadu', N'Indian', N'abctestuser', N'Academy name ', N'Advanced course')
SET IDENTITY_INSERT [dbo].[Enrollment] OFF
GO
SET IDENTITY_INSERT [dbo].[student] ON 

INSERT [dbo].[student] ([studentId], [firstname], [email], [mobilenumber], [enrolledcourse]) VALUES (2, N'Sample user', N'sampleuser@gmail.com', N'9876543210', N'Basics')
INSERT [dbo].[student] ([studentId], [firstname], [email], [mobilenumber], [enrolledcourse]) VALUES (3, N'Pridhvu', N'string@gmail.com', N'string', N'Basics')
INSERT [dbo].[student] ([studentId], [firstname], [email], [mobilenumber], [enrolledcourse]) VALUES (4, N'Raghul', N'raghuleswaran22@gmail.com', N'9876543210', N'Basics')
SET IDENTITY_INSERT [dbo].[student] OFF
GO
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abc@gmail.com', N'123456789', N'abctestuser', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abc12345@gmail.com', N'12345678', N'abc12345', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abc123456@gmail.com', N'12345678', N'abc123456', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abcd1022@gmail.com', N'123456789', N'abcd1022', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abcddemo@gmail.com', N'12345678', N'abcddemo', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'abctestuser@gmail.com', N'1234567890', N'abctestuser', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'admin@gmail.com', N'Admin@123', N'admin/admin', 9876543210, N'admin')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'kranthi12345@gmail.com', N'111111111', N'kranthi12345', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'pqrstd@gmail.com', N'1111111111', N'pqrstduser', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'pqrstest@gmail.com', N'123456789', N'pqrstest', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'prudhvi@gmail.com', N'123456789', N'prudhvi123', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'prudhvi12@gmail.com', N'123456789', N'prudhvi12', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'raghuleswaran22@gmail.com', N'Raghul@22', N'raghuleswar', 9080785996, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample1@gmail.com', N'1234@Abc', N'sample1', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample10@gmail.com', N'11111111', N'sample10', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample11@gmail.com', N'11111111', N'sample11', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample12@gmail.com', N'11111111', N'sample12', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample13@gmail.com', N'11111111', N'sample13', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample14@gmail.com', N'11111111', N'sample14', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample15@gmail.com', N'11111111', N'sample15', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample16@gmail.com', N'1234@Abc', N'sample16', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample17@gmail.com', N'11111111', N'sample17', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample18@gmail.com', N'11111111', N'sample18', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample19@gmail.com', N'11111111', N'sample19', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample2@gmail.com', N'1234@Abc', N'sample2', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample20@gmail.com', N'111111111', N'sample20', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample22@gmail.com', N'123456789', N'sample22', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample23@gmail.com', N'111111111', N'sample23', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample29@gmail.com', N'111111111', N'sample29', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample30@gmail.com', N'1111111111', N'sample30', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample31@gmail.com', N'1111111111', N'sample31', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample33@gmail.com', N'1111111111', N'sample33', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample34@gmail.com', N'1111111111', N'sample34', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample6@gmail.com', N'1234@Abc', N'sample6', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample7@gmail.com', N'1234@Abc', N'sample7', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample8@gmail.com', N'1234567890', N'sample80', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'sample9@gmail.com', N'123456789', N'sample90', 9876543210, N'user')
INSERT [dbo].[Users] ([email], [password], [username], [mobileNumber], [userRole]) VALUES (N'useruser@gmail.com', N'123456789', N'userser12', 9876543210, N'user')
GO
ALTER TABLE [dbo].[course]  WITH CHECK ADD FOREIGN KEY([academyname])
REFERENCES [dbo].[academy] ([academyname])
GO
