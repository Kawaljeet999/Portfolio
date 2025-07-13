import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-lg font-bold text-primary">KAWALJEET SINGH</h3>
        <p className="text-muted-foreground">
          Full Stack Developer & Machine Learning Engineer
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <Button
            size="icon"
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-muted-foreground mt-4">
          © 2024 Kawaljeet Singh. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Crafted with ❤️ using React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
