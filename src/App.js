// import todoList from "./components/todoList";
import Textfield from '@atlaskit/textfield'; 
import Button from '@atlaskit/button'; 

function App() {
  return (
  <>
    <h1>add new</h1>
    <h3>Danh sach can lam</h3> 
    <Textfield 
      name ="add-todo" 
      placeholder='them viec can lam...' 
      elemAfterInput={
        <Button isDisabled ={true} appearance ='primary'>
          Thêm
        </Button>
        }
        css = {{padding: "2px 4px 2px"}}
        ></Textfield>
        <todoList />
  </>  
  //atlassian - cài đặt một số components: button, textfield, icon...
  ); 
}
//6/2/2024 
//Kinh nghiệm fix code lên 1 tầm cao mới=))) khi mình biết search đúng từ khóa 
//hnay khi k install dc atlaskit, mình đã tra "error when npm install atlaskit"

export default App;
//8 vulnerabilities -> lệnh address issues: npm audit fix --force 
//run 'npm audit' for details 

//KINH NGHIỆM
//Sau 1 thời gian code, quay lại, mình có thấy mình lên trình không? Chắc là đéo=)))
//Vì mình chỉ toàn chép code ông này mà, chứ có hiểu mấy đâu 
//KINH NGHIỆM CHỌN KHÓA HỌC - "CHỌN THẦY MÀ HỌC": xem video của ông này, mình KO THẤY CÓ ĐÍCH ĐẾN. Nghĩa là, không biết học từng câu lệnh như vậy,
//Rồi xong cuối khóa, mình sẽ làm được sản phẩm gì, hay chỉ copy code rồi "NGHĨ LÀ MÌNH ĐÃ HỌC" 

//8/2/2024
//ReactJS được hiểu là 1 framework, chứ không phải library 

//KINH NGHIỆM QUÝ GIÁ NHẤT HÔM NAY
//Cứ nhìn vào thằng MMQ là biết. Mình học thế nào thì học, phải CHẬM NHƯNG CHẮC, cứ nhìn vào nó, nếu mình học mà chắc kiến thức lớn hơn hoặc bằng nó
//Thì là mình đã chắc chắn phần đấy rồi. Chứ ĐỪNG ĐỂ lặp lại tình trạng kiểu: học quân sự xong, mấy cái bảng tính toán còn k hiểu kỹ, không giảng lại được nhé
//Đừng học kiểu Đại số tuyến tính "tưởng mình chắc nhưng thực ra là không chắc", thấy phần nào là phải biết nó thuộc mục lục kiến thức nào, kiểu vậy! 

//1 ứng dụng của React: single page app - hiểu đơn giản là khi nhấn vào 1 mục trên web, ví dụ Facebook, thì web không bị reload 
//#1 Why react (Youtube Hỏi dân IT): Google dùng npm angular, sử dụng typescript, scale lớn (tỷ người dùng), typescript thì không thể vượt trội = javascript đc
//Web HỌC: Reactjs.org -> docs
//Tóm lại: React được Facebook chống lưng nhé. Khi dùng React, là chúng ta đang dùng 1 framework về phía front-end
//Câu chuyện công nghệ (nghe qua): GraphQL (a query language for your API) vs restAPI - mỗi cái có 1 ưu nhược điểm. 

//KINH NGHIỆM: trước khi sử dụng 1 công nghệ gì, thì các bạn phải biết tại sao nó ra đời/ nó giải quyết vấn đề gì nha 
//Đúng, THAY ĐỔI CÁCH TƯ DUY: chứ không phải xem mấy video Youtube bảo là "Hook là hot" - xàm đấy, vì Hook mà siêu việt thì Class components đã không tồn tại 

//"Các bạn đang chạy theo cái hot của công nghệ. Tuy nhiên, khi các bạn chạy theo 1 công nghệ nào đó mới, thì chưa chắc công nghệ đó sẽ giải quyết được vấn đề cho các bạn"
//A ấy toàn chọn xem những video uy tín, từ tận gốc vấn đề, những nhà phát minh ra công nghệ đó (the inventors), những trang báo mạng uy tín nước ngoài,
//Chứ không phải những video Youtube đã được "XÀO NẤU" để CÂU VIEW người dùng chưa biết gì! 
//Ví dụ: nguồn React Conf, Blogged answers "why React context doesn't replace Redux?", Mark Erikson - The state of Redux 

//CÂU HỎI: làm sao chạy được source code của người khác online, mà không phải download về máy mình
//push code lên github: ghi ra để cho đỡ ph giở Youtube xem lại này
//git init -> git add . -> git commit -m "noi dung message" -> git set remote (copy trên github repo) -> git push origin master
