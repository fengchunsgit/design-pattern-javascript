public class SingleObject{
  private SingleObject(){

  }

  private SingleObject instance=null;
  
  public SingleObject getInstance(){
    if(instance ==null){
      instance=new SingleObject();
    }
    return instance;
  }


  public void login(){
    System.out.println("login...");
  }
}


