import subprocess
import sys
import os

def install_requirements():
    """Install required packages"""
    print("Installing required packages...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("Packages installed successfully!")
    except subprocess.CalledProcessError:
        print("Error installing packages. Please install manually: pip install -r requirements.txt")
        return False
    return True

def create_presentation():
    """Create the PowerPoint presentation"""
    print("Creating PowerPoint presentation...")
    try:
        # Import and run the presentation creation function
        from create_presentation_with_images import create_bara_imambara_presentation_with_images
        create_bara_imambara_presentation_with_images()
        print("✅ PowerPoint presentation created successfully!")
        print("📄 File: Bara_Imambara_Presentation_With_Images.pptx")
        return True
    except ImportError as e:
        print(f"Error importing presentation module: {e}")
        return False
    except Exception as e:
        print(f"Error creating presentation: {e}")
        return False

def main():
    print("🎯 Bara Imambara PowerPoint Presentation Generator")
    print("=" * 50)
    
    # Check if we're in the right directory
    if not os.path.exists("index.html"):
        print("❌ Error: Please run this script from the project directory containing the Bara Imambara files.")
        return
    
    # Install requirements
    if not install_requirements():
        return
    
    # Create presentation
    if create_presentation():
        print("\n🎉 Success! Your PowerPoint presentation is ready.")
        print("\n📋 Presentation includes:")
        print("   • 11 slides with comprehensive content")
        print("   • Beautiful images from your project")
        print("   • Professional formatting and styling")
        print("   • Detailed information about Bara Imambara")
        print("\n💡 You can now open 'Bara_Imambara_Presentation_With_Images.pptx' in PowerPoint!")
    else:
        print("❌ Failed to create presentation. Please check the error messages above.")

if __name__ == "__main__":
    main() 