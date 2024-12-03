document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  let points = 0; // النقاط الإجمالية

  // جمع الإجابات
  const answers = {
    question1: document.querySelector('input[name="question1"]:checked'),
    question2: document.querySelector('input[name="question2"]:checked'),
    question3: document.querySelector('input[name="question3"]:checked'),
    question4: document.querySelector('input[name="question4"]:checked'),
  };

  // التحقق من الإجابات الصحيحة
  if (answers.question1 && answers.question1.value === 'b') points++;
  if (answers.question2 && answers.question2.value === 'b') points++;
  if (answers.question3 && answers.question3.value === 'c') points++;
  if (answers.question4 && answers.question4.value === 'c') points++;

  // عرض النتيجة
  let resultDiv = document.getElementById('quizResult');
  if (!resultDiv) {
    // إنشاء عنصر جديد إذا لم يكن موجودًا
    resultDiv = document.createElement('div');
    resultDiv.id = 'quizResult';
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '10px';
    resultDiv.style.border = '1px solid #007bff';
    resultDiv.style.borderRadius = '5px';
    resultDiv.style.backgroundColor = '#f8f9fa';
    resultDiv.style.textAlign = 'center';
    document.getElementById('quizForm').appendChild(resultDiv); // إضافة النتيجة تحت النموذج
  }

  // تحديث محتوى العنصر
  resultDiv.innerHTML = `<strong>لقد حصلت على ${points} نقطة!</strong>`;
});
